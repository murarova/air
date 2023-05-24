import { Field, FieldArray, reduxForm } from 'redux-form'

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import ImageUploader from 'components/ImageUploader/ImageUploader';
import Modal from '@material-ui/core/Modal'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import SaveIcon from '@material-ui/icons/Save';
import createNotification from "components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/addProductStyles.js";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useState } from "react";

const useStyles = makeStyles(styles);
const required = value => value ? undefined : 'Це поле обов\'язкове';
const validate = values => {
  const errors = {}
  if (!values.price) {
    errors.price = 'Це поле обов\'язкове'
  }
  return errors
}

const renderTextarea = ({ input, required, label, type, classes, meta: { touched, error, warning } }) => (
  <div>
    <label className={ classes.inputLabel }>{ label }
      { required && <span className={ classes.asterisk }>&#65121;</span> }
    </label>
    <div className={ classes.inputWrapper }>
      <textarea { ...input } className={ classes.input } type={ type } />
      { touched && ((error && <span className={ classes.error }>{ error }</span>) || (warning && <span>{ warning }</span>)) }
    </div>
  </div>
)

const renderInput = ({ input, required, label, type, classes, meta: { touched, error, warning } }) => (
  <div>
    <label className={ classes.inputLabel }>{ label }
      { required && <span className={ classes.asterisk }>&#65121;</span> }
    </label>
    <div className={ classes.inputWrapper }>
      <input { ...input } className={ classes.input } type={ type } />
      { touched && ((error && <span className={ classes.error }>{ error }</span>) || (warning && <span>{ warning }</span>)) }
    </div>
  </div>
)

const renderRadioGroup = ({ input, ...rest }) => (
  <FormControl style={ { display: "flex" } }>
    <RadioGroup { ...input } { ...rest } style={ { flexDirection: "row" } } valueselected={ input.value }
      onChange={ (event, value) => input.onChange(value) } />
  </FormControl >
)


function EditProductComponent({ onClose, initialValues, handleEditProduct }) {
  const [ images, setImages ] = useState(initialValues?.images || []);

  async function handleFormSubmit(values) {
    const newProduct = {
      ...values,
      images
    }

    await handleEditProduct(initialValues?.id, newProduct)
    setImages([])
  }

  return <EditProductForm onSubmit={ handleFormSubmit }
    setImages={ setImages }
    initialValues={ initialValues }
    images={ images }
    onClose={ onClose } />
}

function EditForm({ handleSubmit, onClose, images, setImages, reset, initialValues, touch }) {
  const classes = useStyles();
  const validationErrors = useSelector(state => state.form?.editProduct?.syncErrors);

  const handleFormSubmit = async () => {
    if (validationErrors) {
      touch(...Object.keys(validationErrors));
      createNotification("error", "Заповніть, будь ласка, обов'язкові поля");
      return
    } else {
      await handleSubmit();
      reset();
      onClose()
    }
  }


  function handleDeleteImage(id) {
    setImages(images.filter(({ key }) => key !== id))
  }

  const renderProperties = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <div>
        <IconButton onClick={ () => fields.push({}) } className={ classes.addBtn }>
          <AddIcon />
        </IconButton>
        { submitFailed && error && <span>{ error }</span> }
        { fields.map((propertie, index) => (
          <div key={ index }>
            <div className={ classes.propertieContainer }>
              <p>{ `${ index + 1 }.` }</p>
              <IconButton onClick={ () => fields.remove(index) } className={ classes.deleteBtn }>
                <DeleteIcon />
              </IconButton>
            </div>

            <Field
              name={ `${ propertie }.label` }
              type="text"
              classes={ classes }
              component={ renderTextarea }
              label="Свойство"
            />
            <Field
              name={ `${ propertie }.value` }
              type="text"
              classes={ classes }
              component={ renderTextarea }
              label="Значение"
            />
          </div>
        )) }
      </div>
    )
  }


  return (<>
    <Modal open onClose={ onClose }>
      <div className={ classes.container }>
        <div className={ classes.btnWrapper }>
          <IconButton onClick={ handleFormSubmit }>
            <SaveIcon />
          </IconButton>
          <IconButton onClick={ onClose }>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={ classes.wrapper }>
          <form onSubmit={ handleSubmit }>
            <Field name="stock" component={ renderRadioGroup }>
              <FormControlLabel className={ classes.label } value="1" control={ <Radio color="primary" /> } label="В наявності" />
              <FormControlLabel className={ classes.label } value="0" control={ <Radio color="primary" /> } label="Немає в наявності" />
            </Field>

            <label className={ classes.label } htmlFor="articleNumber">Артикл</label>
            <Field className={ classes.input } type="text" component="input" name='articleNumber' />
            <label className={ classes.label } htmlFor="brand">Бренд</label>
            <Field className={ classes.input } type="text" component="input" name='brand' />
            <label className={ classes.label } htmlFor="description">Описание</label>
            <Field className={ classes.input } type="text" component="textarea" name='description' rows="4" />
            <Field validate={ [ required ] } classes={ classes } label="Ціна" className={ classes.input } type="text" component={ renderInput } required name='price' />
            <label className={ classes.label } htmlFor="title">Заголовок</label>
            <Field className={ classes.input } type="text" component="input" name='title' />
            <p className={ classes.title }>Характеристики.</p>
            <div className={ classes.specificationContainer }>
              <FieldArray name={ initialValues?.specification?.inner ? "specification.inner" : "specification" } component={ renderProperties } classes={ classes } />
            </div>
            <ImageUploader setImages={ setImages } />
            { images?.map(({ fullPath, downloadURL, key }) => (
              <div key={ downloadURL } className={ classes.imagesContainer }>
                <p>{ fullPath }</p>
                <IconButton onClick={ () => handleDeleteImage(key) }>
                  <DeleteIcon />
                </IconButton>
              </div>
            )) }
          </form>
        </div>
      </div>
    </Modal>
  </>
  );
}

const EditProductForm = reduxForm({
  form: 'editProduct',
  validate
})(EditForm)


export default EditProductComponent;
