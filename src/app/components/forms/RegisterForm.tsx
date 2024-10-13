import { z } from 'zod';
import Form from '@/components/ui/RG_form'; // Import ShadCN's Form wrapper
//import { TextInput } from '@/components/'; // Import ShadCN's TextInput component
import { Input } from '@/components/ui/input'; // Import ShadCN's TextInput component
import { Button } from '@/components/ui/button'; // Import ShadCN's Button component
import { Label } from '@/components/ui/label';

const schema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(8),
	confirmPassword: z.string().min(8),
});

const LoginForm = () => {
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Form schema={schema} onSubmit={onSubmit}>
			<Label htmlFor="firtName">First Name</Label>
			<Input id="firtName" name="firstName" placeholder="First Name" />
			<Label htmlFor="lastName">Last Name</Label>
			<Input id="lastName" name="lastName" placeholder="Last Name" />
			<Label htmlFor="email">Email</Label>
			<Input id="email" type="email" placeholder="Email" />
			<Label htmlFor="password">Password</Label>
			<Input id="password" placeholder="Password" type="password" />
			<Label htmlFor="confPassword">Confirm Password</Label>
			<Input id="confPassword" type="password" />
			<Button type="submit">Register</Button>
		</Form>
	);
};

export default LoginForm;
