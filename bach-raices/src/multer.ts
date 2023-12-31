import multer from "multer"

// DONDE SE VA ALMACENAR

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__dirname}/../uploads`)
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()} - ${file.originalname} `)
    },
})

// Configuracion del multer
const upload = multer({ storage: storage });

export default upload;
