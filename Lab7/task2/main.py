from models import Animal, Dog, Cat


def main():

    animal1 = Animal("KzAnimal", 5, "Brown")
    dog1 = Dog("Rex", 3, "Black", "German Shepherd")
    cat1 = Cat("Murka", 2, "White", 9)

    animals = [animal1, dog1, cat1]

    for a in animals:
        print(a)
        print(a.speak())
        print(a.info())
        print("-----------")

    print(dog1.fetch())
    print(cat1.climb())


if __name__ == "__main__":
    main()