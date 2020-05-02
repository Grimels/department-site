import * as React from 'react';
import { Formik } from 'formik';

import { Form as StyledForm, StyledStrapForm } from 'styled/HomePage/Form';
import { Input, InvalidLabel } from 'styled/Input';
import { ButtonWrapper } from 'styled/HomePage/About';
import { Button } from 'styled/Button';

import { IHomePageSection } from '.';

import { validateSubscribeFormValues } from 'utils/validateFormValues';
import {
	subHeaderTextByLanguageMap,
	headerTextByLanguageMap,
	contentTextByLanguageMap,
	placeholdersMap,
	buttonTextMap,
} from './constants/form';

export interface ISubscribeFormValues {
	name?: string;
	surName?: string;
	email?: string;
	question?: string;
}

export const Form: React.FC<IHomePageSection> = ({ language }) => {
	const placeholders = placeholdersMap.get(language);
	return (
		<StyledForm
			id='apply-rules'
			header={headerTextByLanguageMap.get(language)}
			subHeader={subHeaderTextByLanguageMap.get(language)}
			content={contentTextByLanguageMap.get(language)}
		>
			<Formik
				initialValues={{ name: '', surName: '', email: '', question: '' }}
				validate={values => validateSubscribeFormValues(values, language)}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<StyledStrapForm onSubmit={handleSubmit}>
						<Input
							placeholder={placeholders?.name}
							name='name'
							type='text'
							className='text-white'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
							invalid={errors.name && touched.name && errors.name}
						></Input>
						<InvalidLabel>{errors.name && touched.name && errors.name}</InvalidLabel>

						<Input
							placeholder={placeholders?.surName}
							name='surName'
							type='text'
							className='text-white'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.surName}
							invalid={errors.surName && touched.surName && errors.surName}
						></Input>
						<InvalidLabel>{errors.surName && touched.surName && errors.surName}</InvalidLabel>

						<Input
							placeholder={placeholders?.email}
							name='email'
							type='email'
							className='text-white'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							invalid={errors.email && touched.email && errors.email}
						></Input>
						<InvalidLabel>{errors.email && touched.email && errors.email}</InvalidLabel>
						<Input
							placeholder={placeholders?.question}
							name='question'
							type='textarea'
							className='text-white'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.question}
							invalid={errors.question && touched.question && errors.question}
						></Input>
						<InvalidLabel>{errors.question && touched.question && errors.question}</InvalidLabel>

						<ButtonWrapper>
							<Button type='submit' disabled={isSubmitting}>
								{buttonTextMap.get(language)}
							</Button>
						</ButtonWrapper>
					</StyledStrapForm>
				)}
			</Formik>
		</StyledForm>
	);
};
