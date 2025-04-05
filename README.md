# Hello Remote Node.js

ローカルにNode.jsをインストールせずに開発してみる。

Dev Containersを使って初めから環境構築。


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



