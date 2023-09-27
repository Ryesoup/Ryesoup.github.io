
git clone https://github.com/Ryesoup/Ryesoup.github.io.git;

https://ryesoup.github.io

1. git 저장소로 이동
저장소의 루트 디렉토리로 이동합니다.
cd path/to/your/repository

2.모든 변경된 파일들을 Git에 추가합니다.
 여기서 .은 현재 디렉토리의 모든 파일을 의미합니다. 특정 파일만 추가하려면 파일 이름을 지정하면 됩니다. 예: git add index.html styles.css
git add .

3. 변경 사항 커밋
 변경 사항을 커밋합니다. 커밋 메시지를 통해 이 변경에 대한 설명을 추가합니다.
git commit -m "Refactor: Separated CSS into its own file"

4. 경 사항을 GitHub에 푸시
로컬에서의 커밋을 GitHub 저장소에 푸시합니다. 만약 origin이라는 이름으로 원격 저장소가 설정되어 있고, main 브랜치에 푸시하려는 경우:
git push origin main



/my-blog
|-- /css
|   |-- base.css
|   |-- header.css
|   |-- footer.css
|   |-- dropdown.css
|   |-- overlay.css
|-- /js
|   |-- scripts.js
|   |-- dropdownEvents.js
|-- /partials
|   |-- header.html
|   |-- footer.html
|   |-- common-scripts.html  <-- 여기에 추가
|   |-- common-head.html     <-- 여기에 추가
|-- /html
|   |-- blog.html
|-- index.html



