"use client";
import { Button, Input } from "antd";
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
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<issueForm>();

  const onSubmit = async (data: issueForm) => {
    if (data.title?.length >= 3 && data.description?.length >= 3) {
      await axios.post("/api/issues", data);
      router.push("/issues");
    }
  };

  return (
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
  );
};

export default NewIssuePage;
