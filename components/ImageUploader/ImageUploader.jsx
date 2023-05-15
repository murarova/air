import React from 'react'
import createNotification from "components/Notify/Notify";
import { makeStyles } from "@material-ui/core/styles";
import { nanoid } from 'nanoid'
import { pluralize } from '../../utils/utils';
import styles from "styles/components/imageUploaderStyles.js";
import { useDropzone } from 'react-dropzone'
import { useFirebase } from 'react-redux-firebase'

function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified
    });
}

const useStyles = makeStyles(styles);

function ImageUploader({ setImages }) {
  const firebase = useFirebase()

  async function onImageDrop(image) {
    //TODO: remove react-redux-firebase

    const newImages = image.map(image => {
      const imageId = nanoid();
      const [ _, extension ] = image.name.split(".")
      return renameFile(image, `${ imageId }.${ extension }`)
    })
    const images = await firebase.uploadFiles("images", newImages, "images")
    const mappedFiles = images.map(({ downloadURL, key, File }) => ({
      fullPath: File.fullPath,
      downloadURL,
      key,
    }))
    const noun = pluralize(mappedFiles.length, "картинк")
    const verb = mappedFiles.length !== 1 ? "добавлено" : "добавлена"
    createNotification("success", `Успешно ${ verb } ${ noun }`)
    setImages(prev => [ ...prev, ...mappedFiles ])
  }

  const {
    getRootProps,
    getInputProps
  } = useDropzone({ accept: { 'image/*': ['.jpeg', '.jpg', '.png'] }, onDrop: onImageDrop });

  //TODO: add files validation

  const classes = useStyles();

  return (
    <div { ...getRootProps() } className={ classes.uploader }>
      <div className={ classes.container }
      >
        <input { ...getInputProps() } />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      </div>
    </div>
  )
}

export default ImageUploader
