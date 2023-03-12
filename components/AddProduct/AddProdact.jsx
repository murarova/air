import { Field, FieldArray, reduxForm } from 'redux-form'

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ImageUploader from 'components/ImageUploader/ImageUploader';
import Modal from '@material-ui/core/Modal'
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/addProductStyles.js";

const useStyles = makeStyles(styles);

function AddProduct({ handleSubmit, reset, setImages, images, onClose }) {
  const classes = useStyles();

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label className={ classes.label }>{ label }</label>
      <div>
        <textarea { ...input } className={ classes.input } type={ type } />
        { touched && error && <span>{ error }</span> }
      </div>
    </div>
  )

  function handleDeleteImage(id) {
    setImages(images.filter(({ key }) => key !== id))
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit();
    reset();
  }

  const renderProperties = ({ fields, meta: { error, submitFailed } }) => (
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
            component={ renderField }
            label="Свойство"
          />
          <Field
            name={ `${ propertie }.value` }
            type="text"
            component={ renderField }
            label="Значение"
          />
        </div>
      )) }
    </div>
  )


  return (
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
          <form onSubmit={ handleFormSubmit }>
            <label className={ classes.label } htmlFor="articleNumber">Артикл</label>
            <Field className={ classes.input } type="text" component="input" name='articleNumber' />
            <label className={ classes.label } htmlFor="brand">Бренд</label>
            <Field className={ classes.input } type="text" component="input" name='brand' />
            <label className={ classes.label } htmlFor="description">Описание</label>
            <Field className={ classes.input } type="text" component="textarea" name='description' />
            <label className={ classes.label } htmlFor="price">Ціна</label>
            <Field className={ classes.input } type="number" component="input" name='price' />
            <label className={ classes.label } htmlFor="title">Заголовок</label>
            <Field className={ classes.input } type="text" component="input" name='title' />
            <p className={ classes.title }>Характеристики.</p>
            <div className={ classes.specificationContainer }>
              <p className={ classes.specificationGroup }>Внутренний блок</p>
              <FieldArray name="specification.inner" component={ renderProperties } />
            </div>
            <div className={ classes.specificationContainer }>
              <p className={ classes.specificationGroup }>Наружный блок</p>
              <FieldArray name="specification.outer" component={ renderProperties } />
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
  );
}

const AddProductForm = reduxForm({
  form: 'addProduct',
})(AddProduct)


export default AddProductForm;
