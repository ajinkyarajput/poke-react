####Without using Docker
1) Install node
2) go to directory
3) npm install
4) npm start

####Using Docker
1) go to directory
2) docker build -t <name_of_image> .
3) docker run -d --name <name_of_container> <name_of_image> -p <port>:3000 bash