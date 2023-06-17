module.exports = {
  "dev": {
    variables: [
      { key: "AWS_S3_APP", value: `sudofy-design-kit-test` },
      { key: "AWS_CF_ID", value: `E3CEBF5GZ48BCS` }
    ]
  },
  "master": {
    variables: [
      { key: "AWS_S3_APP", value: `sudofy-design-kit` },
      { key: "AWS_CF_ID", value: `E2585ZFA9Q0CME` }
    ]
  },
  "dev-arsalan": {
    variables: [
      { key: "AWS_S3_APP", value: `sudofy-design-kit-dev-arsalan` },
      { key: "AWS_CF_ID", value: `E31VQ2SG9VFDEX` }
    ]
  },
}