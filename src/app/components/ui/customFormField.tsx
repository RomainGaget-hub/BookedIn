'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form"

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType<Control>
}

export default function CustomFormField({ control }: CustomProps) {
    return (

        <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                        <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}