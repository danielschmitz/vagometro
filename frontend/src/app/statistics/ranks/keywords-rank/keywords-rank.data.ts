export interface Keywords {
  [key: string]: string;
}

/*
  All keys must be in lower case.
  
  You will see multiple keys pointing to the same value.
  This is necessary to ensure that different ways of writing a technology
  will always be counted as just one technology. For example:

  typescript: 'TypeScript'
  ts: 'TypeScript'

  Two different ways of writing TypeScript that in the end will be counted only as TypeScript.
*/

export const keywords: Keywords = {
  //FRONTEND
  html: 'HTML',
  html5: 'HTML',
  css: 'CSS',
  css3: 'CSS',
  javascript: 'JavaScript',
  js: 'JavaScript',
  typescript: 'TypeScript',
  ts: 'TypeScript',
  react: 'React',
  reactjs: 'React',
  'react.js': 'React',
  angular: 'Angular',
  angularjs: 'AngularJS',
  'vue.js': 'Vue.js',
  vuejs: 'Vue.js',
  vue: 'Vue.js',
  vue3: 'Vue.js',
  bootstrap: 'Bootstrap',
  sass: 'Sass',
  less: 'Less',
  redux: 'Redux',
  webpack: 'Webpack',
  babel: 'Babel',
  'responsive design': 'Responsive Design',
  'restful apis': 'RESTful APIs',
  restful: 'RESTful APIs',
  rest: 'RESTful APIs',
  graphql: 'GraphQL',
  ajax: 'AJAX',
  json: 'JSON',
  xml: 'XML',
  'ui/ux design': 'UI/UX Design',
  'frontend testing': 'Testes',
  stylus: 'Stylus',
  next: 'NextJS',
  nextjs: 'NextJS',
  'next.js': 'NextJS',
  blazor: 'Blazor',
  jquery: 'jQuery',
  edux: 'Edux',
  mobx: 'Mobx',
  vuex: 'Vuex',
  recoil: 'Recoil',
  leaflet: 'Leaflet',
  'leaflet.js': 'Leaflet',
  leafletjs: 'Leaflet',
  //Styled Components - multi-work keyword
  relay: 'Relay',
  figma: 'Figma',
  tailwind: 'Tailwind',
  spa: 'Single Page Applications',
  pwa: 'Progressive Web Apps',
  webassembly: 'WebAssembly',
  nuxt: 'Nuxt',
  'nuxt.js': 'Nuxt',
  nuxtjs: 'Nuxt',
  gastby: 'Gatsby',
  jekyll: 'Jekyll',
  hugo: 'Hugo',
  remix: 'Remix',
  zustand: 'Zustand',
  rxjs: 'RxJS',
  //END OF FRONTEND

  //BACKEND
  kotlin: 'Kotlin',
  'node.js': 'Node.js',
  node: 'Node.js',
  nodejs: 'Node.js',
  'express.js': 'Express',
  express: 'Express',
  java: 'Java',
  'spring boot': 'Spring Boot',
  springboot: 'Spring Boot',
  spring: 'Spring Boot',
  python: 'Python',
  django: 'Django',
  ruby: 'Ruby',
  'ruby on rails': 'Ruby on Rails',
  rails: 'Ruby On Rails',
  php: 'PHP',
  laravel: 'Laravel',
  'asp.net': '.NET',
  '.net': '.NET',
  '.net core': '.NET',
  csharp: 'C#',
  'c#': 'C#',
  go: 'Go',
  golang: 'Go',
  flask: 'Flask',
  fastapi: 'FastAPI',
  'database management': 'Database Management',
  'api development': 'API Development',
  'authentication and authorization': 'Authentication and Authorization',
  oauth: 'OAuth',
  jwt: 'JWT',
  'security best practices': 'Security Best Practices',
  'c++': 'C++',
  C: 'C',
  soap: 'SOAP',
  rabbitmq: 'RabbitMQ',
  swagger: 'Swagger',
  perl: 'Perl',
  delphi: 'Delphi',
  cobol: 'Cobol',
  fortran: 'Fortran',
  grpc: 'GRPC',
  socket: 'Socket.io', //multi-word keyword
  postman: 'Postman',
  insomnia: 'Insomnia',
  apollo: 'Apollo',
  entity: 'Entity Framework',
  elixir: 'Elixir',
  haskell: 'Haskell',
  mq: 'IBM MQ',
  nestjs: 'NestJS',
  nest: 'NestJS',
  'nest.js': 'NestJS',
  hibernate: 'Hibernate',
  websocket: 'WebSocket',
  websockets: 'WebSocket',
  ssr: 'Server-Side Rendering',
  sse: 'Server-Sent Events',
  svelte: 'Svelte',
  deno: 'Deno',
  bun: 'Bun',
  symfony: 'Symfony',
  fastify: 'Fastify',
  groovy: 'Groovy',
  grails: 'Grails',
  marshmallow: 'Marshmallow',
  alembic: 'Alembic',
  sqlalchemy: 'SQLAlchemy',
  //END OF BACKEND

  //DATABASE
  sql: 'SQL',
  nosql: 'NoSQL',
  mongodb: 'MongoDB',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  elasticsearch: 'Elasticsearch',
  oracle: 'Oracle',
  redis: 'Redis',
  plsql: 'PL/SQL',
  aurora: 'AWS Aurora',
  //END OF DATABASE

  //MOBILE
  android: 'Android',
  ios: 'iOS',
  swift: 'Swift',
  ionic: 'Ionic',
  cordova: 'Cordova',
  'apache cordova': 'Cordova',
  flutter: 'Flutter',
  //TODO: Search for multi-words keywords first, then split and search without multi-words keywords.
  native: 'React Native',
  xamarin: 'Xamarin',
  expo: 'Expo',
  //END OF MOBILE

  //CLOUD
  microservices: 'Microsserviços',
  'micro serviços': 'Microsserviços',
  microserviços: 'Microsserviços',
  microsserviços: 'Microsserviços',
  aws: 'AWS',
  cloudflare: 'Cloudflare',
  gcp: 'GCP',
  'Google Cloud Platform': 'GCP',
  azure: 'Azure',
  'web servers': 'Web Servers',
  nginx: 'Nginx',
  apache: 'Apache',
  docker: 'Docker',
  dockers: 'Docker',
  'ci/cd': 'CI/CD',
  ci: 'CI/CD',
  cd: 'CI/CD',
  jenkins: 'Jenkins',
  terraform: 'Terraform',
  kubernetes: 'Kubernetes',
  kubernets: 'Kubernetes', //sic
  k8s: 'Kubernetes',
  firebase: 'Firebase',
  tomcat: 'Tomcat',
  amplify: 'AWS Amplify',
  kynesis: 'AWS Kynesis',
  cloudfront: 'AWS Cloudfront',
  ecs: 'AWS ECS',
  rds: 'AWS RDS',
  sqs: 'AWS SQS',
  s3: 'AWS S3',
  lambda: 'AWS Lambda',
  sns: 'AWS SNS',
  cloudwatch: 'AWS Cloudwatch',
  //END OF CLOUD

  //TESTING,
  junit: 'JUnit',
  mockito: 'Mockito',
  teste: 'Testes',
  jest: 'Jest',
  enzyme: 'Enzyme',
  cypress: 'Cypress',
  selenium: 'Selenium',
  cucumber: 'Cucumber',
  tdd: 'TDD',
  bdd: 'BDD',
  ddd: 'DDD',
  pytest: 'pytest',
  //END OF TESTING

  //MISCELLANEOUS
  git: 'Git',
  github: 'GitHub',
  gitflow: 'GitFlow',
  scrum: 'Scrum',
  gitlab: 'Gitlab',
  'clean code': 'Clean Code',
  'clean architecture': 'Clean Architecture',
  lean: 'Lean',
  kanbam: 'Kanban', //sic
  kanban: 'Kanban',
  salesforce: 'Salesforce',
  yaml: 'YAML',
  assembly: 'Assembly',
  linux: 'Linux',
  jira: 'Jira',
  maven: 'Maven',
  wordpress: 'WordPress',
  shell: 'Shell',
  meteor: 'Meteor.js',
  'meteor.js': 'Meteor.js',
  meteorjs: 'Meteor.js',
  blockchain: 'Blockchain',
  drupal: 'Drupal',
  magento: 'Magento',
  embarcado: 'Sistemas embarcados',
  embarcados: 'Sistemas embarcados',
  mensageria: 'Mensageria',
  zabbix: 'Zabbix',
  grafana: 'Grafana',
  windows: 'Windows',
  //Design Patterns - multi-word keyword
  iot: 'IoT',
  xp: 'XP',
  crm: 'CRM',
  erp: 'ERP',
  //END OF MISCELLANEOUS

  //DATA SCIENCE
  excel: 'Excel',
  analytics: 'Analytics',
  dmbok: 'DMBOK',
  r: 'R',
  scala: 'Scala',
  spark: 'Spark',
  airflow: 'AirFlow',
  lgpd: 'LGPD',
  qlik: 'Qlik',
  tableau: 'Tableau',
  looker: 'Looker',
  pipeline: 'Pipeline',
  etl: 'ETL',
  etls: 'ETL',
  numpy: 'NumPy',
  matplotlib: 'Matplotlib',
  seaborn: 'Seaborn',
  redshift: 'Redshift',
  bigquery: 'BigQuery',
  snowflake: 'Snowflake',
  hive: 'Hive',
  hbase: 'HBase',
  kafka: 'Kafka',
  hadoop: 'Hadoop',
  primavera: 'Primavera',
  //END OF DATA SCIENCE

  //GAME DEVELOPMENT
  unity: 'Unity',
  godot: 'Godot',
  //END OF GAME DEVELOPMENT

  //AI
  ia: 'IA',
  ai: 'IA',
  tensorflow: 'TensorFlow',
  pytorch: 'PyTorch',
  keras: 'Keras',
  'scikit-learn': 'scikit-learn',
  scikit_learn: 'scikit-learn',
  pandas: 'Pandas',
  openai: 'OpenAI',
  nltk: 'NLTK',
  spaCy: 'spaCy',
  fastai: 'fastai',
  'stable-diffusion': 'Stable Diffusion',
  transformers: 'Transformers',
  gensim: 'Gensim',
  prophet: 'Prophet',
  opencv: 'OpenCV',
  dlib: 'dlib',
  pybrain: 'PyBrain',
  deap: 'DEAP',
  mlops: 'MLOps',
  llama: 'Llama',
  langchain: 'Langchain',
  LLMS: 'LLM',
  llm: 'LLM',
  databricks: 'Databricks',
  mlflow: 'MLflow',
  lakehouse: 'lakehouse',
  //END OF AI
};
