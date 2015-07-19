jpeg('rplot.jpg')
a<-read.csv("uploads/1.csv", header = FALSE)
hist(a$V1)
dev.off()


