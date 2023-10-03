import React, { ReactElement, useState } from 'react';
import globalClasses from 'assets/scss/globalClasses.module.scss'
import classes from './ContactForm.module.scss'
import classNames from "classnames";
import CustomCheckbox from "../../../components/common/CustomCheckbox/CustomCheckbox";
import CenteredContent from "../../../components/layout/CenteredContent/CenteredContent";
import { useFormik } from "formik";
import { useAppDispatch } from "../../../redux/hooks";
import * as yup from 'yup'
import { useBreakpoints } from "../../../utils/hooks/useBreapoints";

interface IFormValues {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
  subject: string,
  message: string,
}

export default function ContactForm(): ReactElement {
  const breakpoints = useBreakpoints()

  const [initValues] = useState<IFormValues>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const validationSchema = yup.object({
  })

  const processSubmit = async () => {
    console.log('submitted values:')
    console.log(values)
  }

  const {
    values,
    handleSubmit,
    handleChange,
  } =
    useFormik({
      validationSchema: validationSchema,
      onSubmit: processSubmit,
      initialValues: initValues,
      enableReinitialize: true,
    });

  return (
    <CenteredContent maxContentWidth={breakpoints.up('md') ? 1196 : '100%'}>
      <div className={classes.container}>
        <div className={classes.info}>
          <h1 className={classes.info_title}>Contact Information</h1>
          <h4 className={classes.info_subtitle}>Say something to start a live chat!</h4>

          <div className={classes.info_contacts}>
            <div className={classes.info_contact}>
              <span>
                <i className="icon-phone"/>
              </span>
              <a href="tel: +1012 3456 789">+1012 3456 789</a>
            </div>
            <div className={classes.info_contact}>
              <span>
                <i className="icon-mail"/>
              </span>
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </div>
            <div className={classes.info_contact}>
              <span>
                <i className="icon-place"/>
              </span>
              <a href="https://maps.app.goo.gl/P4qWCXovwD63z8us6">132 Dartmouth Street Boston,<br/> Massachusetts 02156 United States</a>
            </div>
          </div>

          <div className={classes.info_sm}>
            <button className={classNames(
              globalClasses.icon_button,
              classes.info_sm_item
            )}>
              <i className="icon-twitter"/>
            </button>
            <button className={classNames(
              globalClasses.icon_button,
              classes.info_sm_item
            )}>
              <i className="icon-instagram"/>
            </button>
            <button className={classNames(
              globalClasses.icon_button,
              classes.info_sm_item
            )}>
              <i className="icon-discord"/>
            </button>
          </div>
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.form_inputs}>
            <label className={classes.form_item}>
              <input
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                required
                placeholder="John"
              />
              <div>First Name</div>
            </label>
            <label className={classes.form_item}>
              <input
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                placeholder="Doe"
              />
              <div>Last Name</div>
            </label>
            <label className={classes.form_item}>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
                placeholder="qwerty@gmail.com"
              />
              <div>Email</div>
            </label>
            <label className={classes.form_item}>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                pattern="[0-9 +\(\)\-]+"
                placeholder="+1 012 3456 789"
              />
              <div>Phone Number</div>
            </label>
          </div>

          <h5 className={classes.form_subject_title}>Select Subject?</h5>

          <div className={classes.form_subjects}>
            <CustomCheckbox label="General Inquiry 1" name="subject" value="v1" onChange={handleChange} radio/>
            <CustomCheckbox label="General Inquiry 2" name="subject" value="v2" onChange={handleChange} radio/>
            <CustomCheckbox label="General Inquiry 3" name="subject" value="v3" onChange={handleChange} radio/>
            <CustomCheckbox label="General Inquiry 4" name="subject" value="v4" onChange={handleChange} radio/>
          </div>

          <label className={classNames(
            classes.form_item,
            classes.form_item_long,
          )}>
          <textarea
            rows={1}
            name="message"
            value={values.message}
            onChange={handleChange}
            required
            placeholder="Write your message.."
          />
            <div>Message</div>
          </label>

          <button type="submit" className={classNames(
            globalClasses.button,
            classes.form_button,
          )}>Send Message
          </button>
        </form>
      </div>
    </CenteredContent>
  );
}