"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, Input, Textarea, FormStatus } from "@/components/forms/fields";
import Button from "@/components/ui/Button";
import { submitLead } from "@/lib/submitLead";

interface InvestorFormValues {
  name: string;
  organisation: string;
  email: string;
  note: string;
}

export default function InvestorDeckForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InvestorFormValues>();

  const onSubmit = async (data: InvestorFormValues) => {
    setStatus("idle");
    const ok = await submitLead({ formType: "investor", ...data });
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
        <Field label="Fund / Organisation" error={errors.organisation?.message}>
          <Input
            hasError={!!errors.organisation}
            {...register("organisation", { required: "This field is required" })}
          />
        </Field>
      </div>
      <Field label="Email" error={errors.email?.message}>
        <Input
          type="email"
          hasError={!!errors.email}
          {...register("email", { required: "Email is required" })}
        />
      </Field>
      <Field label="Brief Note">
        <Textarea {...register("note")} />
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Request Investor Deck"}
      </Button>

      <FormStatus status={status} />
    </form>
  );
}
