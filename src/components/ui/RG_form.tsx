import { ReactNode } from 'react';
import {
	useForm,
	FormProvider,
	SubmitHandler,
	FieldValues,
	DefaultValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form as ShadcnForm } from '@/components/ui/form'; // Import ShadCN's Form wrapper
import { ZodSchema } from 'zod';

interface FormProps<T extends FieldValues> {
	children: ReactNode;
	onSubmit: SubmitHandler<T>;
	defaultValues?: DefaultValues<T>;
	schema?: ZodSchema; // If you're using Zod or another schema for validation
	className?: string;
}

const Form = <T extends FieldValues>({
	children,
	onSubmit,
	defaultValues,
	schema,
	className,
}: FormProps<T>) => {
	const methods = useForm<T>({
		resolver: schema ? zodResolver(schema) : undefined, // Use resolver for schema validation if provided
		defaultValues: defaultValues,
	});

	return (
		<FormProvider {...methods}>
			<ShadcnForm>
				<form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
					{children}
				</form>
			</ShadcnForm>
		</FormProvider>
	);
};

export default Form;
