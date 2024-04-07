import Character from '../classes/Character';

describe('Character', () => {
    describe('constructor', () => {
        it('should create a character with valid name and type', () => {
            const character = new Character('Alice', 'Bowman');
            expect(character.name).toBe('Alice');
            expect(character.type).toBe('Bowman');
            expect(character.health).toBe(100);
            expect(character.level).toBe(1);
            expect(character.attack).toBe(25);
            expect(character.defence).toBe(25);
        });

        it('should throw an error for invalid name', () => {
            expect(() => {
                new Character('A', 'Bowman');
            }).toThrow('Invalid name. Name must be a string with length between 2 and 10 characters.');
        });

        it('should throw an error for invalid type', () => {
            expect(() => {
                new Character('Alice', 'InvalidType');
            }).toThrow('Invalid type. Type must be one of: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
        });

        it('should create a character with the correct properties', () => {
            const character = new Character('Alice', 'Magician');

            // Проверяем основные свойства
            expect(character.name).toBe('Alice');
            expect(character.type).toBe('Magician');
            expect(character.health).toBe(100);
            expect(character.level).toBe(1);

            // Проверяем свойства в зависимости от типа персонажа
            if (character.type === 'Magician') {
                expect(character.attack).toBe(10);
                expect(character.defence).toBe(40);
            }

            // Проверяем методы
            expect(character.levelUp).toBeInstanceOf(Function);
            expect(character.damage).toBeInstanceOf(Function);
        });
    });

    describe('levelUp', () => {
        it('should increase level and stats after leveling up', () => {
            const character = new Character('Bob', 'Swordsman');
            character.health = 50;
            character.levelUp();
            expect(character.level).toBe(2);
            expect(character.attack).toBe(48); // 40 * 1.2 = 48
            expect(character.defence).toBe(12); // 10 * 1.2 = 12
            expect(character.health).toBe(100);
        });

        it('should throw an error when leveling up a dead character', () => {
            const character = new Character('Charlie', 'Zombie');
            character.health = 0;
            expect(() => {
                character.levelUp();
            }).toThrow('Cannot level up a dead character.');
        });
    });

    describe('damage', () => {
        it('should reduce health based on damage points with lower precision', () => {
            const character = new Character('David', 'Magician');
            character.damage(20);
            expect(character.health).toBeLessThanOrEqual(92); 
        });

        it('should not reduce health if character is already dead', () => {
            const character = new Character('Eve', 'Undead');
            character.health = 0;
            character.damage(20);
            expect(character.health).toBe(0);
        });
    });
});