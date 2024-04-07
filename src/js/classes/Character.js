class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Invalid name. Name must be a string with length between 2 and 10 characters.');
        }
        const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!allowedTypes.includes(type)) {
            throw new Error('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch (type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            default:
                break;
        }
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Cannot level up a dead character.');
        }

        this.level += 1;
        this.attack = Math.ceil(this.attack * 1.2);
        this.defence = Math.ceil(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            return;
        }

        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
} 
module.exports = Character;