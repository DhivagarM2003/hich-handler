const express = require("express");


const student = require("../controllers/student");

const router =express.Router()

router.use(express.json());


router.post('/create_student', async (req, res) => {
    try {
        // Attempt to create a new student
        const result =  await student.register(req.body); 
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json({ "message": "Successfully inserted" });
        } else {
            res.status(500).json({ "error": "Failed to create student" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});


module.exports = router