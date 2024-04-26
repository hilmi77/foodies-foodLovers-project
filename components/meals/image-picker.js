"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imagePickRef = useRef();

  const ImagePickHandler = () => {
    imagePickRef.current.click();
  };

  const ImageChangeHandler = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>Please pick an image.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
        </div>
        <input
          type="file"
          id={name}
          accept=".jpg,.png,.jpeg,.webp"
          name={name}
          className={classes.input}
          ref={imagePickRef}
          onChange={ImageChangeHandler}
          required
        />
      </div>
      <button
        type="button"
        className={classes.button}
        onClick={ImagePickHandler}
      >
        Pick an Image
      </button>
    </div>
  );
};

export default ImagePicker;
