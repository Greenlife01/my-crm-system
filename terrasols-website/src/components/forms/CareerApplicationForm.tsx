"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, Input, Textarea, FormStatus } from "@/components/forms/fields";
import Button from "@/components/ui/Button";
import { submitLead } from "@/lib/submitLead";

interface CareerFormValues {
  name: string;
  role: string;
  linkedin: string;
  message: string;
}

export default function CareerApplicationForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormValues>();

  const onSubmit = async (data: CareerFormValues) => {
    setStatus("idle");
    const ok = await submitLead({ formType: "career", ...data });
    if (ok) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input hasError={!!errors.name} {...register("name", { required: "Name is required" })} />
        </Field>
        <Field label="Role of Interest" error={errors.role?.message}>
          <Input hasError={!!errors.role} {...register("role", { required: "Role is required" })} />
        </Field>
      </div>
      <Field label="LinkedIn / CV Link" error={errors.linkedin?.message}>
        <Input
          hasError={!!errors.linkedin}
          placeholder="https://linkedin.com/in/…"
          {...register("linkedin", { required: "Please share a LinkedIn or CV link" })}
        />
      </Field>
      <Field label="Message">
        <Textarea {...register("message")} />
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit Application"}
      </Button>

      <FormStatus status={status} />
    </form>
  );
}
