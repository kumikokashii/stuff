import pytest


def test_int_equal():
  assert 1 == 1
  assert 2 == 2
  assert 3 == 31


@pytest.mark.yumyum
def test_tuple_equal():
  assert (2, 3, 5) == (2, 3, 5)
  assert (7, 11) == (31, 31)


def test_addition_type_match():
  with pytest.raises(TypeError):
    a = 9
    b = 'hello'
    c = a + b


@pytest.mark.skip()
def test_lets_skip():
  assert 'apples' == 'oranges'


@pytest.mark.xfail()
def test_this_should_fail():
  assert 'cats' == 'dogs'


@pytest.mark.xfail()
def test_this_will_pass():
  assert len('happy') == 5


