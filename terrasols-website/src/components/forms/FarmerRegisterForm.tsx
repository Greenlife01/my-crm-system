"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Field, Input, FormStatus } from "@/components/forms/fields";
import Button from "@/components/ui/Button";
import { submitLead } from "@/lib/submitLead";

interface FarmerFormValues {
  name: string;
  village: string;
  district: string;
  state: string;
  landSize: string;
  phone: string;
  whatsapp: string;
}

export default function FarmerRegisterForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FarmerFormValues>();

  const onSubmit = async (data: FarmerFormValues) => {
    setStatus("idle");
    const ok = await submitLead({ formType: "farmer", ...data });
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
        <Field label="Full Name" error={errors.name?.message}>
          <Input hasError={!!errors.name} {...register("name", { required: "Name is required" })} />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <Input
            hasError={!!errors.phone}
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
          />
        </Field>
        <Field label="Village" error={errors.village?.message}>
          <Input hasError={!!errors.village} {...register("village", { required: "Village is required" })} />
        </Field>
        <Field label="District" error={errors.district?.message}>
          <Input hasError={!!errors.district} {...register("district", { required: "District is required" })} />
        </Field>
        <Field label="State" error={errors.state?.message}>
          <Input hasError={!!errors.state} {...register("state", { required: "State is required" })} />
        </Field>
        <Field label="Land Size (acres)" error={errors.landSize?.message}>
          <Input
            hasError={!!errors.landSize}
            type="number"
            step="0.1"
            {...register("landSize", { required: "Land size is required" })}
          />
        </Field>
        <Field label="WhatsApp Number (optional)">
          <Input {...register("whatsapp")} />
        </Field>
      </div>

      <Button type="submit" variant="secondary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Register My Land"}
      </Button>

      <FormStatus status={status} />
    </form>
  );
}
