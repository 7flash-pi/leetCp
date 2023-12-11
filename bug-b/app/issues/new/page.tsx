"use client";
import { Button, Input,notification } from "antd";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface issueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
    const [api, contextHolder] = notification.useNotification();
  const router = useRouter();
  const {  control, handleSubmit } = useForm<issueForm>();


  const openNotification = () =>{
    api.error({
        message:'An unexpected error occured.',
        duration:2
    })
  }

  const onSubmit = async (data: issueForm) => {
    try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          
        
    } catch (error) {
      openNotification()
        
    }
  };

  return (
    <>
    {contextHolder}
    <form className="max-w-xl space-y-3" onClick={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => <Input placeholder="Title" {...field} />}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button htmlType="submit">Submit new Issue</Button>
    </form>
    </>
  );
};

export default NewIssuePage;
