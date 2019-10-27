module.exports = {
    getAdPage: (req,res) => {
        if(req.params.getAd()){
            return res.render("ads");
        }

        if(req.params.noAd()){
            return res.sendStatus(204);
        }

        if(req.params.noRequestId()){
            return res.sendStatus(400);
        }
        
        if(req.params.noHeight()){
            return res.sendStatus(400);
        }

        if(req.params.noWidth()){
            return res.sendStatus(400);
        }
    }
}