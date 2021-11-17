


def krneki(x, l=[]):
    for i in [1,2,3,4]:
        if i % 2 == 0:
            l.append(i)
    return l

print(krneki(3))
print(krneki(2,[3,2,1]))


import cv2
def images_the_same(image1, image2):
    """
    :param image1: path of image1
    :param image2: path of image2
    :return: True if images are the same, False if images are not the same
    """
    im1 = cv2.imread(image1)
    im2 = cv2.imread(image2)

    if im1.shape != im2.shape:
        return False

    difference = cv2.subtract(im1, im2)
    b, g, r = cv2.split(difference)

    if cv2.countNonZero(b) == 0 and cv2.countNonZero(g) == 0 and cv2.countNonZero(r) == 0:
        return True
    return False


print(images_the_same('cards/firstone.png', 'current_card.png'))
print(images_the_same('current_card.png', 'cards/firstone.png'))

x = 'hello'
print(x[2:4])

print(2 < 3)
print(0 == True)
x = 'idi v pizdo materino'
n = 'f'



lastLetterOfPet = x[len(x) - 1]

print(lastLetterOfPet)
x = {'ena':'ena', 'dva':'tri'}
print(x.get('tri'))

for i in 'krneki':
    print(i)

for i in x:
    print(x[i])

def moje_ime(x='miha'):
    print(f'hello {x}')

moje_ime()







