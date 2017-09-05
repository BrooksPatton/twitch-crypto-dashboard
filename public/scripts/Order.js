class Order {
  constructor(price, amount, orderId, type, location) {
    this.price = price;
    this.amount = amount;
    this.orderId = orderId;
    this.type = type;
    this.state = 'created';
    this.location = location;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.launchForce = createVector(0, -10);
    this.gravityForce = createVector(0, 0.1);
    this.red = 255;
    this.green = 255;
    this.blue = 0;
    this.particles = [];
    this.numberOfParticles = constrain(this.amount, 3, 10);

    this.generateParticles();
  }

  display() {
    noStroke();
    fill(this.red, this.green, this.blue);
    rectMode(CENTER);
    rect(this.location.x, this.location.y, 3, 3);
  }

  run() {
    if(this.state === 'created') {
      this.applyForce(this.launchForce);
      this.state = 'launching';
    }

    if(this.location.y <= height / 2) {
      this.state = 'exploding';
      this.particles.forEach(particle => particle.run());
    }

    this.applyForce(this.gravityForce);
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  generateParticles() {
    for(let i = 0; i < this.numberOfParticles; i = i + 1) {
      const particle = new Particle(this.location);
      this.particles.push(particle);
    }
  }
}
