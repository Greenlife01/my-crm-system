"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, Input, Select, Textarea, FormStatus } from "@/components/forms/fields";
import Button from "@/components/ui/Button";
import { submitLead } from "@/lib/submitLead";

interface BuyerFormValues {
  name: string;
  company: string;
  role: string;
  annualTonnes: string;
  useCase: string;
  message: string;
}

export default function BuyerEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BuyerFormValues>();

  const onSubmit = async (data: BuyerFormValues) => {
    setStatus("idle");
    const ok = await submitLead({ formType: "buyer", ...data });
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
        <Field label="Company" error={errors.company?.message}>
          <Input hasError={!!errors.company} {...register("company", { required: "Company is required" })} />
        </Field>
        <Field label="Role" error={errors.role?.message}>
          <Input hasError={!!errors.role} {...register("role", { required: "Role is required" })} />
        </Field>
        <Field label="Annual Tonne Requirement" error={errors.annualTonnes?.message}>
          <Input
            hasError={!!errors.annualTonnes}
            {...register("annualTonnes", { required: "This field is required" })}
          />
        </Field>
      </div>

      <Field label="Use Case">
        <Select {...register("useCase")}>
          <option value="voluntary">Voluntary offset</option>
          <option value="compliance">Compliance (CBAM / CCTS)</option>
          <option value="resale">Resale</option>
        </Select>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <Textarea hasError={!!errors.message} {...register("message", { required: "Message is required" })} />
      </Field>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Request an Offtake Discussion"}
      </Button>

      <FormStatus status={status} />
    </form>
  );
}
