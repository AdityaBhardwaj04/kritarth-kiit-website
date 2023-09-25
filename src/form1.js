import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {
  const { register, handleSubmit } = useForm();
  const iframeRef = useRef(null);

  const onSubmit = (data) => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Fill out the form fields
    const inputs = iframeDoc.querySelectorAll('input');
    inputs[0].value = data.firstName;
    inputs[1].value = data.lastName;
    inputs[2].value = data.dateOfBirth;
    inputs[3].value = data.gender;
    inputs[4].value = data.email;
    inputs[5].value = data.phone;
    inputs[6].value = data.rollNumber;
    inputs[7].value = data.branch;
    inputs[8].value = data.year;

    // Check the events checkboxes
    const checkboxes = iframeDoc.querySelectorAll('input[type="checkbox"]');
    checkboxes[0].checked = data.events.includes('Klickit');
    checkboxes[1].checked = data.events.includes('Rocket Singh');
    checkboxes[2].checked = data.events.includes('Nukkad Natak');
    checkboxes[3].checked = data.events.includes('KGT');

    // Fill out the university name
    const universityInput = iframeDoc.querySelector('input[name="University Name"]');
    universityInput.value = data.university;

    // Submit the form
    const submitButton = iframeDoc.querySelector('button[type="submit"]');
    submitButton.click();
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block font-bold mb-1">
            First Name (Required)
          </label>
          <input
            id="firstName"
            type="text"
            {...register('firstName', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-bold mb-1">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block font-bold mb-1">
            Date of Birth (Required)
          </label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block font-bold mb-1">
            Gender (Required)
          </label>
          <select
            id="gender"
            {...register('gender', { required: true })}
            className="w-full border rounded p-2"
          >
            <option value="">Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="block font-bold mb-1">
            Email Address (Required)
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-bold mb-1">
            Phone Number (Required)
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="rollNumber" className="block font-bold mb-1">
            Roll Number
          </label>
          <input
            id="rollNumber"
            type="text"
            {...register('rollNumber')}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="<EUGPSCoordinates>branch" className="<EUGPSCoordinates>block font-bold mb-1">
           Branch
         </label>
         <input
           id="<EUGPSCoordinates>branch"
           type="<EUGPSCoordinates>text"
           {...register('<EUGPSCoordinates>branch')}
           className="<EUGPSCoordinates>w-full border rounded p-2"
         />
       </div>
       <div>
         <label htmlFor="<EUGPSCoordinates>year" className="<EUGPSCoordinates>block font-bold mb-1">
           Year
         </label>
         <input
           id="<EUGPSCoordinates>year"
           type="<EUGPSCoordinates>text"
           {...register('<EUGPSCoordinates>year')}
           className="<EUGPSCoordinates>w-full border rounded p-2"
         />
       </div>
        <div>
          <span className="block font-bold mb-1">Events you wish to participate (Required)</span>
          <label className="block">
            <input
              type="checkbox"
              value="Klickit"
              {...register('events', { required: true })}
            />{' '}
            Klickit
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="Rocket Singh"
              {...register('events', { required: true })}
            />{' '}
            Rocket Singh
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="Nukkad Natak"
              {...register('events', { required: true })}
            />{' '}
            Nukkad Natak
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="KGT"
              {...register('events', { required: true })}
            />{' '}
            KGT
          </label>
        </div>
        <div>
          <label htmlFor="university" className="block font-bold mb-1">
            University Name (Required)
          </label>
          <input
            id="university"
            type="text"
            {...register('university', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {/* Hidden iframe containing the Microsoft Form */}
      <iframe
        ref={iframeRef}
        src="https://forms.office.com/r/bCAyi1W99t"
        className="hidden"
      />
    </div>
  );
};

export default Form;
