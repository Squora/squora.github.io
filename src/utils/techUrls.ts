type TechUrlMap = Record<string, string>;

export const TECH_URLS: TechUrlMap = {
  // Programming Languages
  "PHP": "https://www.php.net/",
  "PHP 8.2": "https://www.php.net/releases/8.2/en.php",
  "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
  "Golang": "https://go.dev/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "TypeScript": "https://www.typescriptlang.org/",
  "Typescript": "https://www.typescriptlang.org/", // alias
  "Python": "https://www.python.org/",

  // Frontend
  "React": "https://react.dev/",
  "jQuery": "https://jquery.com/",
  "Tailwind": "https://tailwindcss.com/",

  // Backend Frameworks
  "Node.js": "https://nodejs.org/",
  "Laravel": "https://laravel.com/",
  "Symfony": "https://symfony.com/",
  "Laminas": "https://getlaminas.org/",
  "Mezzio": "https://docs.mezzio.dev/",
  ".NET Core": "https://dotnet.microsoft.com/",

  // Databases
  "MySQL": "https://www.mysql.com/",
  "PostgreSQL": "https://www.postgresql.org/",
  "MSSQL": "https://www.microsoft.com/en-us/sql-server",
  "MongoDB": "https://www.mongodb.com/",
  "Cassandra": "https://cassandra.apache.org/",
  "Redis": "https://redis.io/",
  "Memcached": "https://memcached.org/",
  "Firebase": "https://firebase.google.com/",

  // DevOps
  "Docker": "https://www.docker.com/",
  "Docker Compose": "https://docs.docker.com/compose/",
  "Kubernetes": "https://kubernetes.io/",
  "Linux": "https://www.linux.org/",
  "nginx": "https://nginx.org/",
  "Nginx": "https://nginx.org/", // alias
  "Apache": "https://httpd.apache.org/",
  "Makefile": "https://www.gnu.org/software/make/manual/make.html",
  "LXD/LXC": "https://ubuntu.com/lxd",

  // Message Queues
  "RabbitMQ": "https://www.rabbitmq.com/",
  "Kafka": "https://kafka.apache.org/",
  "Gearman": "http://gearman.org/",
  "Beanstalkd": "https://beanstalkd.github.io/",

  // Monitoring
  "Grafana": "https://grafana.com/",
  "Kibana": "https://www.elastic.co/kibana",
  "Elasticsearch": "https://www.elastic.co/elasticsearch",
  "Prometheus": "https://prometheus.io/",
  "Logstash": "https://www.elastic.co/logstash",

  // Other
  "Git": "https://git-scm.com/",
  "gRPC": "https://grpc.io/",
  "GraphQL": "https://graphql.org/",
  "HTTP": "https://developer.mozilla.org/en-US/docs/Web/HTTP",
  "REST": "https://restfulapi.net/",
  "WebSockets": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
};

export const getTechUrl = (tech: string): string | undefined => {
  return TECH_URLS[tech];
};
