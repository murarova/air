import { Field, FieldArray, reduxForm } from 'redux-form'

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ImageUploader from 'components/ImageUploader/ImageUploader';
import Modal from '@material-ui/core/Modal'
import SaveIcon from '@material-ui/icons/Save';
import createNotification from "components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/components/addProductStyles.js";
import { updateProduct } from '../../services/services';
import { useRouter } from 'next/router'
import { useState } from "react";

const useStyles = makeStyles(styles);

function EditProductComponent({ onClose, initialValues }) {
  const [ images, setImages ] = useState(initialValues?.images || []);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  async function handleFormSubmit(values) {
    const newProduct = {
      ...values,
      images
    }

    await updateProduct(initialValues?.id, newProduct)
    createNotification("success", "Товар изменен")
    setImages([])
    refreshData()
  }

  return <EditProductForm onSubmit={ handleFormSubmit }
    setImages={ setImages }
    initialValues={ initialValues }
    images={images}
    onClose={ onClose } />
}

function EditForm({ handleSubmit, onClose, images, setImages, reset }) {
  const classes = useStyles();

  const handleFormSubmit = async () => {
    await handleSubmit();
    reset();
    onClose();
  }

  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label className={ classes.label }>{ label }</label>
      <div>
        <input { ...input } className={ classes.input } type={ type } />
        { touched && error && <span>{ error }</span> }
      </div>
    </div>
  )

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
  }


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
          <form onSubmit={ handleSubmit }>
            <label className={ classes.label } htmlFor="articleNumber">Артикл</label>
            <Field className={ classes.input } type="text" component="input" name='articleNumber' />
            <label className={ classes.label } htmlFor="brand">Бренд</label>
            <Field className={ classes.input } type="text" component="input" name='brand' />
            <label className={ classes.label } htmlFor="description">Описание</label>
            <Field className={ classes.input } type="text" component="textarea" name='description' rows="4" />
            <label className={ classes.label } htmlFor="price">Цена</label>
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
            <div>
              { images?.map(({ fullPath, downloadURL }) => (
                <p key={ downloadURL }>{ fullPath }</p>
              )) }
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

const EditProductForm = reduxForm({
  form: 'editProduct'
})(EditForm)


export default EditProductComponent;
