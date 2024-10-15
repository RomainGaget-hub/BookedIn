// import React, { ReactNode } from 'react';
// import {
// 	useForm,
// 	FormProvider,
// 	SubmitHandler,
// 	FieldValues,
// 	DefaultValues,
// } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { ZodSchema } from 'zod';

// interface FormProps<T extends FieldValues> {
// 	children: ReactNode;
// 	onSubmit: SubmitHandler<T>;
// 	defaultValues?: DefaultValues<T>;
// 	schema?: ZodSchema; // If you're using Zod or another schema for validation
// 	className?: string;
// }

// const RG_Form = <T extends FieldValues>({
// 	children,
// 	onSubmit,
// 	defaultValues,
// 	schema,
// 	className,
// }: FormProps<T>) => {
// 	const methods = useForm<T>({
// 		resolver: schema ? zodResolver(schema) : undefined, // Use resolver for schema validation if provided
// 		defaultValues: defaultValues,
// 	});

// 	return (
// 		<FormProvider {...methods}>
// 			<form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
// 				{children}
// 			</form>
// 		</FormProvider>
// 	);
// };

// export default RG_Form;
