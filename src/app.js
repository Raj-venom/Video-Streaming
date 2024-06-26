import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Data comes in diffrent form in backends: like in json, body, form, url
// Following to accept the type of data we want to accept to backend

// Accepting json
app.use(express.json({ limit: "16kb" }))

// handle data from url :like %20 for space using url encoder
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// if want to store data in server, usually stores for temperory for this app
app.use(express.static("public")) // public =  files from the "public" directory.

// helps in CRUD operation to user cookies from server, like accessing cookies of user
app.use(cookieParser())


// Router import 
import userRouter from "./routes/user.routes.js"
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import likeRouter from "./routes/like.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"



//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/dashboard", dashboardRouter)



export default app 