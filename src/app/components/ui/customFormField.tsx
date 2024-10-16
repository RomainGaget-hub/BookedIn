'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form"
import { FormFieldType } from "../forms/enum";

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    palceholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    children?: React.ReactNode
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    <FormControl>
                        <Input placeholder={props.palceholder} {...field} />
                    </FormControl>
                </div>
            )
        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                    <Input type="checkbox" {...field} />
                </FormControl>
            )
        case FormFieldType.DATE_PICKER:
            return (
                <FormControl>
                    <Input type="date" {...field} />
                </FormControl>
            )
        case FormFieldType.TEXT_AREA:
            return (
                <FormControl>
                    <Input as="textarea" {...field} />
                </FormControl>
            )
        default:
            return null;
    }
}




export default function CustomFormField(props: CustomProps) {
    const { control, fieldType, name, label, palceholder } = props;
    return (

        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className='flex-1'>
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className="shad-error" />
                </FormItem>
            )}
        />
    )
}