import { Grid } from '@mui/material';
import {
  StyledForm,
  StyledFormButton,
  StyledFormCheckbox,
  StyledFormContainer,
  StyledFormInput,
  StyledFormLabel,
  StyledFormOption,
  StyledFormRadio,
  StyledFormSelect,
  StyledFormTextArea,
  StyledTitle,
  StyledFormURL,
  StyledFormUploadFile,
} from '../styles.tsx';

const Form = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const HTMLFormElement = e.target as HTMLFormElement;
    const skills: HTMLInputElement[] = Array.from(
      HTMLFormElement.elements.namedItem('skills') as HTMLInputElement[]
    );
    const formData = {
      fname: HTMLFormElement.fname.value,
      lname: HTMLFormElement.lname.value,
      email: HTMLFormElement.email.value,
      number: HTMLFormElement.number.value,
      gender: HTMLFormElement.gender.value,
      skills: Array.from(skills)
        .filter((skill) => skill.checked)
        .map((skill) => skill.value),
      resume: HTMLFormElement.resume.files[0],
      url: HTMLFormElement.url.value,
      preference: HTMLFormElement.preference.value,
      about: HTMLFormElement.about.value,
    };
    const formDataString = JSON.stringify(formData);

    const blob = new Blob([formDataString], { type: 'text/plain' });
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank');
  };

  return (
    <StyledFormContainer id='form'>
      <StyledForm onSubmit={handleOnSubmit} method='POST'>
        <StyledTitle>Form in React</StyledTitle>
        <Grid container>
          <Grid style={{ width: '100%' }}>
            <Grid item>
              <StyledFormLabel htmlFor='fname'>First Name*</StyledFormLabel>
            </Grid>
            <Grid item>
              <StyledFormInput
                type='text'
                name='fname'
                id='fname'
                placeholder='Enter First Name'
                // pattern='/^[a-zA-Z\s]+$'
                required
              />
            </Grid>
            <Grid item>
              <StyledFormLabel htmlFor='lname'>Last Name*</StyledFormLabel>
            </Grid>
            <Grid item>
              <StyledFormInput
                type='text'
                name='lname'
                placeholder='Enter Last Name'
                // pattern='[a-zA-z]'
                required
              />
            </Grid>
            <Grid item>
              <StyledFormLabel htmlFor='email'>Enter Email*</StyledFormLabel>
            </Grid>
            <Grid item>
              <StyledFormInput
                type='email'
                name='email'
                id='email'
                placeholder='Enter email'
                // pattern='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/'
                required
              />
            </Grid>
            <Grid item>
              <StyledFormLabel htmlFor='number'>Contact*</StyledFormLabel>
            </Grid>
            <Grid item>
              <StyledFormInput
                type='number'
                name='number'
                id='number'
                placeholder='Enter Mobile number'
                pattern='[0-9]'
                required
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='gender'>Gender*</StyledFormLabel>
          <Grid item>
            <StyledFormRadio
              type='radio'
              id='female'
              value='Female'
              name='gender'
              required
            />
            <StyledFormLabel htmlFor='female'>Female</StyledFormLabel>{' '}
            <StyledFormRadio
              type='radio'
              id='male'
              value='Male'
              name='gender'
            />
            <StyledFormLabel htmlFor='male'>Male</StyledFormLabel>{' '}
            <StyledFormRadio
              type='radio'
              id='other'
              value='Other'
              name='gender'
            />
            <StyledFormLabel htmlFor='other'>Other</StyledFormLabel>{' '}
          </Grid>
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='skills'>Skills</StyledFormLabel>
          <Grid item>
            <StyledFormCheckbox
              type='checkbox'
              id='js'
              value='JavaScript'
              name='skills'
            />
            <StyledFormLabel htmlFor='javascript'>JavaScript</StyledFormLabel>{' '}
            <StyledFormCheckbox
              type='checkbox'
              id='python'
              value='python'
              name='skills'
            />
            <StyledFormLabel htmlFor='python'>Python</StyledFormLabel>
            <StyledFormCheckbox
              type='checkbox'
              id='css'
              value='css'
              name='skills'
            />
            <StyledFormLabel htmlFor='css'>CSS</StyledFormLabel>
            <StyledFormCheckbox
              type='checkbox'
              id='html'
              value='html'
              name='skills'
            />
            <StyledFormLabel htmlFor='html'>HTML</StyledFormLabel>
            <StyledFormCheckbox type='checkbox' id='ts' value='ts' name='ts' />
            <StyledFormLabel htmlFor='ts'>TypeScript</StyledFormLabel>
            <StyledFormCheckbox
              type='checkbox'
              id='react'
              value='react'
              name='skills'
            />
            <StyledFormLabel htmlFor='react'>React</StyledFormLabel>
          </Grid>
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='resume'>Upload Resume*</StyledFormLabel>
          <StyledFormUploadFile type='file' id='file' name='resume' required />
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='url'>Enter URL*</StyledFormLabel>
          <StyledFormURL
            type='url'
            name='url'
            id='url'
            pattern='https://.*'
            placeholder='https://example.com'
            required
          />
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='preference'>
            Select your choice
          </StyledFormLabel>
          <StyledFormSelect name='preference'>
            <StyledFormOption value='homeoffice'>Home Office</StyledFormOption>
            <StyledFormOption value='hybrid'>Hybrid</StyledFormOption>
            <StyledFormOption value='office'>Office</StyledFormOption>
          </StyledFormSelect>
        </Grid>
        <Grid container direction={'column'}>
          <StyledFormLabel htmlFor='about'>About</StyledFormLabel>
          <StyledFormTextArea
            name='about'
            id='about'
            placeholder='About yourself'
            maxLength={500}
          ></StyledFormTextArea>
        </Grid>
        <Grid container justifyContent={'center'}>
          <StyledFormButton type='reset' value='Reset' />
          <StyledFormButton type='submit' value='Submit' />
        </Grid>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
