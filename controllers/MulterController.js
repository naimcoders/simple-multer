import multer from "multer"
import path from 'path'

const storage = multer.diskStorage({
    destination: './public/images/',
    filename: (req, file, callback) => {
        return callback(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage })

export default upload