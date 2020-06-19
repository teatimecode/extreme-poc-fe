import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as marked from 'marked';

// 创建Express实例
const app = new express();

// 设置Markdown文件的模板引擎
app.engine('md', (filePath, options, callback) => {
    // 读对应路径的文件
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        // markdown to html渲染
        const rendered = marked(content.toString());
        return callback(null, rendered);
    })
})

// 使用视图模板引擎
app.set('views', './site');
app.set('view engine', 'md');

// 匹配所有HTTP请求路径
app.get("/*", (req, res) => {
    res.render(req.path.substr(1)); // remove "/" from requested path "/<file_path>"
});

// 监听端口
const listener = app.listen(3000, () => {
    console.log('listening on port', listener.address().port);
});
