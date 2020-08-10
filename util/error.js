module.exports = {
    serverError(res,error){
        res.status(500).json({
            message:"Server Error Occurred"
        })
    },
    resourseError(res,error,message){
        res.status(400).json({
            message
        })
    }
}