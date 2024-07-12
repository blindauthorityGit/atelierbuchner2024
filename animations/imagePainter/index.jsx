import React, { useRef, useEffect } from "react";
import styles from "./ImagePainter.module.css";

const ImagePainter = ({ src, alt }) => {
    const canvasRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = imgRef.current;

        // Set canvas size
        canvas.width = img.width;
        canvas.height = img.height;

        const drawImage = (x, y) => {
            ctx.drawImage(img, x - 50, y - 50, 100, 100, x - 50, y - 50, 100, 100);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            drawImage(x, y);
        };

        canvas.addEventListener("mousemove", handleMouseMove);

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.imageContainer}>
            <canvas ref={canvasRef} className={styles.canvas}></canvas>
            <img ref={imgRef} src={src} alt={alt} className={styles.bwImage} />
        </div>
    );
};

export default ImagePainter;
