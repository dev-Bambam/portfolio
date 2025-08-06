import multer from 'multer'

// configure multer for in-memory storage 
const storage = multer.memoryStorage()

// configure multer upload middleware

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // limit file size to 5mb
    },
    fileFilter: (_req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']

        if (allowedMimeTypes.includes(file.mimetype)) {
            return cb(null, true) // Accept file
        }
        cb(new Error('Only images (jpeg, jpg, png, gif, webp) are allowed'))
    }
})