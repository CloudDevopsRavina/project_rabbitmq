# 🚀 Real-Time Event-Driven System using RabbitMQ & Kubernetes

---

## 📌 What is RabbitMQ?

**RabbitMQ** is a message broker that enables communication between services using messages.

👉 It follows the **AMQP (Advanced Message Queuing Protocol)**
👉 It helps build **asynchronous, scalable, and decoupled systems**

---

## 🧠 How RabbitMQ Works

Basic flow:

Client → Producer → Exchange → Queue → Consumer

### 🔹 Step-by-step:

1. Producer sends message
2. Exchange routes message
3. Queue stores message
4. Consumer reads and processes
5. Consumer sends acknowledgment (ACK)

---

## 🏗 Project Overview

This project demonstrates a **real-time event-driven architecture** using RabbitMQ deployed on Kubernetes.

### 🎯 Objective:

* Build asynchronous communication between services
* Process messages in real time
* Scale consumers independently

---

## ⚙️ Tech Stack

* Node.js (Producer & Consumer)
* RabbitMQ (Message Broker)
* Kubernetes (Orchestration)
* Docker (Containerization)
* AWS ECR (Image Registry)

---

## 📦 Components

### 1. Producer (API Service)

* REST endpoint: `/order`
* Sends messages to RabbitMQ

### 2. RabbitMQ

* Manages queues
* Routes messages
* Ensures delivery

### 3. Consumer (Worker Service)

* Listens to queue (`orders`)
* Processes messages
* Sends acknowledgment

---

## 🔁 Message Flow

1. Client sends POST request
2. Producer publishes message
3. RabbitMQ stores message
4. Consumer processes message
5. Message is acknowledged and removed

---

## 🚀 Deployment Commands

### 🔹 Clone Repo

```bash
git clone <repo-url>
cd project_rabbitmq
```

---

### 🔹 Build Docker Images

```bash
docker build -t producer ./producer
docker build -t consumer ./consumer
```

---

### 🔹 Login to AWS ECR

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <ECR_URL>
```

---

### 🔹 Tag & Push Images

```bash
docker tag producer:latest <ECR_URL>/producer:latest
docker push <ECR_URL>/producer:latest

docker tag consumer:latest <ECR_URL>/consumer:latest
docker push <ECR_URL>/consumer:latest
```

---

### 🔹 Deploy to Kubernetes

```bash
kubectl apply -f Rabbitmq_k8's.yaml
kubectl apply -f producer.yaml
kubectl apply -f consumer.yaml
```

---

### 🔹 Check Resources

```bash
kubectl get pods
kubectl get svc
```

---

### 🔹 View Logs

```bash
kubectl logs -l app=consumer
kubectl logs -f -l app=consumer
```

---

### 🔹 Scale Consumers

```bash
kubectl scale deployment consumer --replicas=5
```

---

## 🌐 Access Services

* Producer API → http://<EXTERNAL-IP>:3000
* RabbitMQ UI → http://<EXTERNAL-IP>:15672

---

## 🧪 Testing

```bash
curl -X POST http://<producer-url>:3000/order \
-H "Content-Type: application/json" \
-d '{"id":1,"item":"laptop"}'
```

---

## 📊 RabbitMQ Queue States

| State   | Meaning          |
| ------- | ---------------- |
| Ready   | Waiting messages |
| Unacked | Processing       |
| Total   | Ready + Unacked  |

---

## ⚡ Features

* Asynchronous communication
* Real-time processing
* Scalable consumers
* Load distribution
* Decoupled architecture

---

## ✅ Advantages of RabbitMQ

* Improves system performance
* Enables loose coupling
* Handles traffic spikes
* Reliable message delivery
* Supports multiple consumers
* Easy to scale

---

## ⚠️ Limitations

* No persistence enabled (in this setup)
* No retry mechanism
* No Dead Letter Queue (DLQ)
* Single-node RabbitMQ

---

## 🚀 Future Improvements

* Add persistent queues
* Implement retry logic
* Add Dead Letter Queue
* Enable RabbitMQ clustering
* Add monitoring (Prometheus/Grafana)

---

## 🧠 Key Learnings

* Event-driven architecture
* Async communication
* Kubernetes deployments
* Docker image lifecycle
* Real-time systems design

---

## 🔑 Summary

This project demonstrates how to build a scalable, real-time event-driven system using RabbitMQ and Kubernetes, enabling efficient and decoupled communication between services.
