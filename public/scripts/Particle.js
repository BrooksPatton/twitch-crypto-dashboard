class Particle {
  constructor(location) {
    this.parentLocation = location;
    this.location = null;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.initialForce = this.generateInitialForce();
    this.applyForce(this.initialForce);
    this.red = random(0, 256);
    this.green = random(0, 256);
    this.blue = random(0, 256);
    this.size = 3;
  }

  run() {
    if(!this.location) this.location = this.parentLocation.copy();

    this.update();
    this.display();
  }

  generateInitialForce() {
    const x = random(-5, 5);
    const y = random(-5, 5);

    return createVector(x, y);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  display() {
    noStroke();
    fill(this.red, this.green, this.blue);
    ellipse(this.location.x, this.location.y, this.size);
  }
}
