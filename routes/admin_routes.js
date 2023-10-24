const express = require("express");


const admin = require("../controllers/admin");

const router =express.Router()

router.use(express.json());


router.post('/create_admin', async (req, res) => {
    try {
        // Attempt to create a new student
        const result =  await admin.register(req.body); 
        
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


router.post('/login', async (req, res) => {
    try {
        // Attempt to validate a  student
        const result =  await admin.login(req.body); 
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ "error": "no admin found" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error checking student:', error);
        res.status(500).json({ "error": "Internal server error" });
    }
});

router.post('/create_log', async (req, res) => {
    try {
        // Attempt to create a new log
        const result =  await admin.createlog(req.body); 
        
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

router.post('/view_persnol', async (req, res) => {
    try {
        // Attempt to view persnol post
        const result =  await student.view_persnol_post(req.body); 
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ "error": "no post" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating student:', error);
        res.status(400).json({ "error": "Internal server error" });
    }
});
router.post('/view_public', async (req, res) => {
    try {
        // Attempt to view persnol post
        const result =  await student.view_public_post(); 
        
        // Check the result and send an appropriate response
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ "error": "no post" });
        }
    } catch (error) {
        // Handle errors by sending an error response
        console.error('Error creating student:', error);
        res.status(400).json({ "error": "Internal server error" });
    }
});





module.exports = router