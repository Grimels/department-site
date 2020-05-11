import * as React from 'react';
import { Card, CardImg, CardBody, CardHeader, CardSubtitle, CardText, Form } from 'reactstrap';
import { StyledStrapForm } from 'styled/HomePage/Form';
import { Formik } from 'formik';
import { validateSubscribeFormValues, validateLoginForm } from 'utils/validateFormValues';
import { Input as SubscribeFormInput, InvalidLabel } from 'styled/Input';
import { ButtonWrapper } from 'styled/HomePage/About';
import styled from 'styled-components';
import { TEXT_COLOR } from 'styled/constants';
import { Button } from 'styled/Button';
import { useLogin } from 'hooks/useLogin';

export interface LoginPageProps {}

export interface ILoginForm {
	email?: string;
	password?: string;
}

export const Input = styled(SubscribeFormInput)`
	height: 40px;

	&::placeholder {
		color: ${TEXT_COLOR};
	}

	&:hover,
	&:not(:hover) {
		background-color: transparent;
	}
`;

const StyledLoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
	.card {
		width: 350px;
	}
`;

export const LoginPage: React.FC<LoginPageProps> = () => {
	const { login, error } = useLogin();
	return (
		<StyledLoginContainer>
			<Card>
				<CardHeader style={{ textAlign: 'center' }}>
					<h3>Вход</h3>
				</CardHeader>

				<CardBody>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={validateLoginForm}
						onSubmit={(values, { setSubmitting }) => login(values, setSubmitting)}>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting,
						}) => (
							<StyledStrapForm onSubmit={handleSubmit}>
								<Input
									placeholder='Электронная почта'
									name='email'
									type='email'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									invalid={errors.email && touched.email && errors.email && false}
								></Input>
								<InvalidLabel>
									{errors.email && touched.email && errors.email}
								</InvalidLabel>

								<Input
									placeholder='Пароль'
									name='password'
									type='password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									invalid={errors.password && touched.password && errors.password}
								></Input>
								<InvalidLabel>
									{errors.password && touched.password && errors.password}
								</InvalidLabel>

								<ButtonWrapper style={{ textAlign: 'center' }}>
									<Button type='submit' disabled={isSubmitting}>
										Войти
									</Button>
								</ButtonWrapper>
								<br />
								{
									error && (
										<InvalidLabel>
											Неверный адрес электронной почты и/или пароль
										</InvalidLabel>
									)
								}
							</StyledStrapForm>
						)}
					</Formik>
				</CardBody>
			</Card>
		</StyledLoginContainer>
	);
};
