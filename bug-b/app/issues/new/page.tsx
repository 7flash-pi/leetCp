"use client";
import { Button, Input, Alert } from "antd";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { bugSchema } from "@/app/validationSchemas";
import { z } from "zod";
import { useState } from "react";
import Spinner from "@/app/components/Spinner";

type issueForm = z.infer<typeof bugSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<issueForm>({
    resolver: zodResolver(bugSchema),
  });

  const [error, setError] = useState('')
  const[isSubmiting,setIsSubmiting]=useState(false)

  const onSubmit = async (data: issueForm) => {
    try {
        setIsSubmiting(true)
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
        setIsSubmiting(false)
        setError('An Unexpected Error Occured')
    }
  };

  return (
    <div className="max-w-xl">
      <form className=" space-y-3" onClick={handleSubmit(onSubmit)}>
        {errors.title && <Alert message={errors.title.message} type="error" />}
        <Controller
          name="title"
          control={control}
          render={({ field }) => <Input placeholder="Title" {...field} />}
        />
          {errors.description && <Alert message={errors.description.message} type="error" />}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button disabled={isSubmiting} htmlType="submit">Submit new Issue{isSubmiting && <Spinner />}</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
