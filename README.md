# Hello Remote Node.js

ローカルにNode.jsをインストールせずに開発してみる。

`Dev Containers`を使って初めから環境構築。


 `Dev Containers` 使わずに環境構築してみたリポジトリ
https://github.com/novogrammer/hello-remote-nodejs


## 前提
+ Docker Compose
+ VS Code
  + Dev Containers


## dev実行
```bash
docker compose -f compose.dev.yaml build
docker compose -f compose.dev.yaml up
```

## devcontainerの環境をコマンドで試す
```bash
docker compose -f compose.dev.yaml -f .devcontainer/compose.yaml build
docker compose -f compose.dev.yaml -f .devcontainer/compose.yaml up
```



