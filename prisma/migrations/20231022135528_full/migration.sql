-- CreateTable
CREATE TABLE "Post" (
    "postid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "roll" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "domain" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'REVIEW',
    "currentstatus" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postid")
);

-- CreateTable
CREATE TABLE "statuslog" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statuslog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL,
    "postid" TEXT NOT NULL,
    "roll" TEXT NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_roll_fkey" FOREIGN KEY ("roll") REFERENCES "Student"("roll") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statuslog" ADD CONSTRAINT "statuslog_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Post"("postid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_postid_fkey" FOREIGN KEY ("postid") REFERENCES "Post"("postid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_roll_fkey" FOREIGN KEY ("roll") REFERENCES "Student"("roll") ON DELETE RESTRICT ON UPDATE CASCADE;
