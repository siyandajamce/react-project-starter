import express from "express";
import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import open from "open";
import path from "path"
import config from "../webpack.config.dev";

const app = express();

app.set("port", process.env.PORT || 7000);
app.use(express.static(path.resolve("../public")));

//webpack
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(app.get("port"), err => {
	if(err){
		throw(err);
	}else{
		console.log(`Server started at ${app.get("port")}`);
		open(`http://localhost:${app.get("port")}`);
	}
});