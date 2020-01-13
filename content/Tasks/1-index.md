---
title: "Emotion Recognition"
metaTitle: "Emotion Recognition Service"
metaDescription: "Task"
---

## Emotion Recognition

### Task

#### What to do

- Create 2 MicroServices
  -- which will take input as a video (Video can be high quality) and detect Emotion in each frame of the Video (Video length can be 1-5 min) and provide output as a emotions and their count of occurence of each emotion

### Emotions to detect

- Basic microservice
  - detect emeotion in only two labels - positive and negative
- Advance microservice
  - detect emotions as angry,offended,enthusiasm,afraid,happy,neutral

#### Sub Tasks

- Dataset collection
  -- This involves research about which public dataset can be used for commercial purpose
- building a scrapper to get images ( freely available and no copyright ) and labelling the dataset
- Applying various algorithms on the dataset and selecting model with high accuracy
- writing doc every day about the steps which you took every day (this is because when some one new comes he/she will able to know what was done previously)
- building a microservice
- deployment of the microservice via CI/CD

#### Notes

- checkin code everyday , if access to repo is not present or repo is not present request to create one.
- each time update requirements.txt
- daily update the doc
- research things and focus on learning and doing best instead of doing quickly
- if wring code for service/UI , test cases are compulsaory with a test coverage of 80 %
