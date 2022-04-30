mus1="";
mus2="";

left_x=0;
left_y=0;

right_x=0;
right_y=0;

songstat="";
songstat2="";

left_wscore=0;
right_wscore=0;
function preload(){
    mus1=loadSound("Childrens-100KidsSongs-ItsyBitsySpider1.mp3");
    mus2=loadSound("Baby Shark.mp3");
}
function setup() {
    canvas = createCanvas(400,400);
  canvas.center();

  video= createCapture(VIDEO);
  video.hide();

  movements=ml5.poseNet(video, modeloaded);
  movements.on("pose", got_results);
}
function draw() {
    image(video,0,0,400,400);
 stroke('blue');
 fill('crimson');

songstat=mus1.isPlaying();
songstat2=mus2.isPlaying();
if (left_wscore>0.2) {
    circle(left_x,left_y, 25);
    mus2.stop();

    if (songstat==false) {
        mus1.play();
        document.getElementById("song_name").innerHTML="The song is The Itsy Bitsy Spider";
    }
}

if (left_wscore>0.2) {
    circle(left_x,left_y, 25);
    mus2.stop();

    if (songstat==false) {
        mus1.play();
        document.getElementById("song_name").innerHTML="The song is The Itsy Bitsy Spider";
    }
}

if (right_wscore>0.2) {
    circle(left_x,left_y, 25);
    mus1.stop();

    if (songstat==false) {
        mus2.play();
        document.getElementById("song_name").innerHTML="The song is Baby Shark";
    }
}
}

// repat but for right

function modeloaded(){
    console.log("The Model Has Been Loaded");
}
function got_results(results) {
    if (results.length>0) {
        console.log(results);
        left_x=results[0].pose.leftWrist.x;
        left_y=results[0].pose.leftWrist.y;

        right_x=results[0].pose.rightWrist.x;
        right_y=results[0].pose.rightWrist.y;

        left_wscore= results[0].pose.keypoints[9].score;
        right_wscore= results[0].pose.keypoints[10].score;
    }
}
