import ReactFlow, {
  Controls,
  OnConnectEnd,
  OnConnectStart,
  Panel,
  useStoreApi,
  Node,
  useReactFlow,
  ReactFlowProvider,
  NodeOrigin,
  ConnectionLineType,
} from "reactflow";

import "reactflow/dist/style.css";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../store/store";
import MindMapNode from "./MindMapNode";
import MindMapEdge from "./MindMapEdge";
import { useCallback, useRef } from "react";

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
});

const nodeOrigin: NodeOrigin = [0.5, 0.5];

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, addChildNode } = useStore(
    selector,
    shallow
  );
  const store = useStoreApi();
  const { screenToFlowPosition } = useReactFlow();

  const getChildNodePosition = (event: MouseEvent, parentNode?: Node) => {
    const { domNode } = store.getState();

    if (
      !domNode ||
      // we need to check if these properites exist, because when a node is not initialized yet,
      // it doesn't have a positionAbsolute nor a width or height
      !parentNode?.positionAbsolute ||
      !parentNode?.width ||
      !parentNode?.height
    ) {
      return;
    }

    const panePosition = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    // we are calculating with positionAbsolute here because child nodes are positioned relative to their parent
    return {
      x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
      y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
    };
  };

  const connectingNodeId = useRef<string | null>(null);

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      const { nodeInternals } = store.getState();
      const targetIsPane = (event.target as Element).classList.contains(
        'react-flow__pane',
      );
      const node = (event.target as Element).closest('.react-flow__node');
   
      if (node) {
        node.querySelector('input')?.focus({ preventScroll: true });
      } else if (targetIsPane && connectingNodeId.current) {
        const parentNode = nodeInternals.get(connectingNodeId.current);
        const childNodePosition = getChildNodePosition(event as MouseEvent, parentNode);
   
        if (parentNode && childNodePosition) {
          addChildNode(parentNode, childNodePosition);
        }
      }
    },
    [getChildNodePosition],
  );

  return (
    <div className="flex justify-center items-center w-[80vw] h-[80vh] bg-[#fafafa] mx-auto">
      
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          nodeOrigin={nodeOrigin}
          
        >
          <Controls showInteractive={false} />
          <Panel position="top-center">Flow Board</Panel>
        </ReactFlow>
    </div>
  );
}

function FlowWithProvider(props:any) {
  return (
    <ReactFlowProvider>
      <Flow {...props} />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;

