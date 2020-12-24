const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const ClassroomVideo = db.classroom_video;


function getYouTubeId(url) {
    var ID = "";
    url = url
        .replace(/(>|<)/gi, "")
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

exports.create = (req, res) => {
    // Create a Phrase
    const video = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        grade: req.body.grade,
        subject: req.body.subject,
        teacher: req.body.teacher,
        link: req.body.link,
    };

    // Save phrase in database
    ClassroomVideo.create(video)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findByGradeSubjectCount = (req, res) => {
    ClassroomVideo.count({
        where: {
            grade: req.params.grade,
            subject: req.params.subject,
        }
    }).then((c) => {
        res.send({ totalCount: c });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};

exports.findByGradeSubjectPage = (req, res) => {
    var pageNo = req.params.page;

    ClassroomVideo.findAndCountAll({
        where: {
            grade: req.params.grade,
            subject: req.params.subject,
        },
        offset: (pageNo - 1) * 10,
        limit: 10
    }).then((result) => {
        var totalCount = result.count;
        var data = result.rows;
        var objectArray = [];

        for (var i in data) {
            var d = data[i];

            var itemPerPage = 10;
            var totalItemCount = data.length;
            var page = parseInt(pageNo);

            var tPages = Math.ceil(totalCount / itemPerPage);


            var youtubeVideoId = getYouTubeId(d.link);
            var url = "https://www.youtube.com/embed/" + youtubeVideoId + "?html5=1";

            var results = {
                id: d.id,
                title: d.title,
                description: d.description,
                grade: d.grade,
                subject: d.subject,
                teacher: d.teacher,
                link: url,
            };
            objectArray.push(results);
        }
        res.send({ totalPages: tPages, totalCount: totalCount, pageCount: totalItemCount, page: page, results: objectArray });


    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};

exports.findByGradeSubject = (req, res) => {
    ClassroomVideo.findAndCountAll({
        where: {
            grade: req.params.grade,
            subject: req.params.subject,
        }
    }).then((result) => {
        var data = result.rows;

        var objectArray = [];

        for (var i in data) {
            var d = data[i];


            var totalItemCount = data.length;
            var youtubeVideoId = getYouTubeId(d.link);
            var url = "https://www.youtube.com/embed/" + youtubeVideoId + "?html5=1";

            var results = {
                id: d.id,
                title: d.title,
                description: d.description,
                grade: d.grade,
                subject: d.subject,
                teacher: d.teacher,
                link: url,
            };
            objectArray.push(results);
        }
        res.send({ count: totalItemCount, results: objectArray });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};

exports.findOne = (req, res) => {
    ClassroomVideo.findOne({
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        res.send(result);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};

exports.findAll = (req, res) => {
    ClassroomVideo.findAll().then((data) => {
        var objectArray = [];
        for (var i in data) {
            var d = data[i];

            var itemPerPage = 5;
            var totalItemCount = data.length;
            var page = Math.floor((totalItemCount + itemPerPage - 1) / itemPerPage);
            var youtubeVideoId = getYouTubeId(d.link);



            var results = {
                id: d.id,
                title: d.title,
                description: d.description,
                grade: d.grade,
                subject: d.subject,
                teacher: d.teacher,
                link: youtubeVideoId,
            };
            objectArray.push(results);
        }
        res.send({ count: totalItemCount, page: page, results: objectArray });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};